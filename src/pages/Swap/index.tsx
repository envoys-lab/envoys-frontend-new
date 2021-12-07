import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import Switch from 'react-switch';
import Tokens from '../../tokens';

import '../app.scss';

const speedItems = ['Standard (5)', 'Fast (6)', 'Instant (7)'];
const toleranceItems = ['0.1%', '0.5%', '1.0%'];

const Swap: React.FC = () => {
  const history = useHistory();
  const { pair } = useParams<{ pair: string }>();

  const [expert, setExpert] = useState({ checked: false });
  const [multihops, setMultihops] = useState({ checked: false });
  const [deadline, setDeadline] = useState(20);
  const [trxspeed, setTrxspeed] = useState(speedItems[0]);
  const [tolerance, setTolerance] = useState(toleranceItems[1]);
  const [toggle, setToggle] = useState([{ show: false }, { show: false }, { show: false }]);
  const [search, setSearch] = useState('');
  const [inner, setInner] = useState(0);
  const [tokens, setTokes] = useState([]);
  const [quantity, setQuantity] = useState([{ value: 0 }, { value: 0 }]);

  const handleExpert = (checked) => {
    setExpert({ checked: checked });
  };

  const handleMultihops = (checked) => {
    setMultihops({ checked: checked });
  };

  const handleToggle = (index) => {
    const items = [...toggle];
    items[index] = Object.assign({}, { show: !toggle[index].show });
    setToggle(items);
    setInner(index);
  };

  const handleQuantity = (event, index) => {
    const items = [...quantity];
    items[index] = Object.assign({}, { value: event.target.value });
    setQuantity(items);
  };

  useEffect(() => {
    setTokes(
      Tokens.filter((entry) => Object.values(entry).some((val) => typeof val === 'string' && val.includes(search))),
    );
  }, [search]);

  const getRecovery = () => {
    return history.push('/swap/' + pair.split('-')[1] + '-' + pair.split('-')[0]);
  };

  const getToken = (symbol) => {
    return Tokens.find((item) => {
      if (item.symbol.toUpperCase() === symbol) {
        return item;
      }
    });
  };

  const token1 = getToken(pair.split('-')[1]);
  const token2 = getToken(pair.split('-')[0]);

  let content;
  if (toggle[inner === 0 || inner === 1 ? inner : 0].show) {
    content = (
      <section className={'tokens'}>
        <div className={'search bottom'}>
          <input type={'text'} placeholder={'Search pair'} onChange={(event) => setSearch(event.target.value)} />
        </div>
        <ul>
          {tokens.length ? (
            tokens.map((item) =>
              pair.split('-')[0] !== item.symbol.toUpperCase() && pair.split('-')[1] !== item.symbol.toUpperCase() ? (
                <Link
                  onClick={() => handleToggle(inner)}
                  to={
                    '/swap/' +
                    (inner === 0
                      ? pair.split('-')[0] + '-' + item.symbol.toUpperCase()
                      : item.symbol.toUpperCase() + '-' + pair.split('-')[1])
                  }
                  key={item.symbol}
                >
                  <li>
                    <div className={'l-row'} style={{ width: '55px' }}>
                      <img width={40} src={item.icon} />
                    </div>
                    <div className={'l-row'}>{item.name}</div>
                    <div className={'l-row l-right'}>
                      <span className={inner ? 'buy' : 'sell'}>
                        <i className={'fas fa-circle'} />
                      </span>
                    </div>
                  </li>
                </Link>
              ) : (
                ''
              ),
            )
          ) : (
            <li className={'none'}>No results were found for your search. </li>
          )}
        </ul>
      </section>
    );
  } else {
    content = (
      <section className={'swap'}>
        <header>
          <div className={'toolbar'}>
            <div className={'item'}>{toggle[2].show ? 'Setting' : 'Trade tokens in an instant'}</div>
            <div className={'item'} style={{ marginLeft: 'auto' }}>
              <span onClick={() => handleToggle(2)} className={'caret'}>
                <i className={'fas fa-sliders-h'} />
              </span>
            </div>
          </div>
        </header>

        {toggle[2].show ? (
          <div>
            <h4 className={'subtitle'}>Global</h4>
            <label>Default Transaction Speed (GWEI)</label>
            <div className={'btn-group'}>
              {speedItems.map((type) => (
                <div
                  className={trxspeed === type ? 'btn-toggle active' : 'btn-toggle'}
                  key={type}
                  onClick={() => setTrxspeed(type)}
                >
                  {type}
                </div>
              ))}
            </div>

            <hr />

            <h4 className={'subtitle mt-20'}>Swap & Liquidity</h4>
            <label className={'mt-20'}>Slippage Tolerance</label>
            <div className={'btn-group'}>
              {toleranceItems.map((type) => (
                <div
                  className={tolerance === type ? 'btn-toggle active' : 'btn-toggle'}
                  key={type}
                  onClick={() => setTolerance(type)}
                >
                  {type}
                </div>
              ))}
              <input
                className={'otp'}
                type={'text'}
                defaultValue={tolerance}
                onChange={(event) => setTolerance(event.target.value)}
              />
            </div>

            <div className={'flex-box center mt-20'}>
              <div className={'row pynull'}>
                <label>Tx deadline (mins):</label>
              </div>
              <div className={'row pynull'}>
                <input
                  className={'otp'}
                  type={'number'}
                  defaultValue={deadline}
                  onChange={(event) => setDeadline(Number(event.target.value))}
                  style={{ float: 'right' }}
                />
              </div>
            </div>

            <div className={'flex-box center'}>
              <div className={'row pynull'}>
                <label>Disable Multihops:</label>
              </div>
              <div className={'row pynull'}>
                <div className={'mx-5'} style={{ float: 'right' }}>
                  <Switch
                    boxShadow={'0 0 0 2px #627eea'}
                    onColor={'#c9d7ef'}
                    offColor={'#dfebff'}
                    onChange={handleMultihops}
                    checked={multihops.checked}
                    uncheckedIcon={false}
                    checkedIcon={false}
                  />
                </div>
              </div>
            </div>

            <div className={'flex-box center'}>
              <div className={'row pynull'}>
                <label>Expert Mode:</label>
              </div>
              <div className={'row pynull'}>
                <div className={'mx-5'} style={{ float: 'right' }}>
                  <Switch
                    boxShadow={'0 0 0 2px #627eea'}
                    onColor={'#c9d7ef'}
                    offColor={'#dfebff'}
                    onChange={handleExpert}
                    checked={expert.checked}
                    uncheckedIcon={false}
                    checkedIcon={false}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <label>You Pay</label>
            <div className={'token-input'}>
              <div className={'label'}>
                <a href={'https://etherscan.io/token/' + token2.contract} target={'_blank'} rel="noreferrer">
                  {token2.name}
                </a>
              </div>
              <div className={'quantity'}>
                <div className={'line click'}>
                  <a onClick={() => handleToggle(1)}>
                    <img width={30} src={token2.icon} />
                  </a>
                </div>
                <div className={'line click mx-10'} style={{ width: '150px' }}>
                  <a onClick={() => handleToggle(1)}>
                    {token2.symbol.toUpperCase()} <i className={'fas fa-chevron-down'} />
                  </a>
                </div>
                <div className={'line'}>
                  <input
                    type={'number'}
                    defaultValue={quantity[1].value ? quantity[0].value : 0}
                    onChange={(event) => handleQuantity(event, 1)}
                  />
                </div>
              </div>
            </div>

            <div className={'recovery'}>
              <i onClick={getRecovery} className={'fas fa-chevron-circle-down'} />
            </div>

            <label>You Receive</label>
            <div className={'token-input'}>
              <div className={'label'}>
                <a href={'https://etherscan.io/token/' + token1.contract} target={'_blank'} rel="noreferrer">
                  {token1.name}
                </a>
              </div>
              <div className={'quantity'}>
                <div className={'line click'}>
                  <a onClick={() => handleToggle(0)}>
                    <img width={30} src={token1.icon} />
                  </a>
                </div>
                <div className={'line click mx-10'} style={{ width: '150px' }}>
                  <a onClick={() => handleToggle(0)}>
                    {token1.symbol.toUpperCase()} <i className={'fas fa-chevron-down'} />
                  </a>
                </div>
                <div className={'line'}>
                  <input
                    type={'number'}
                    defaultValue={quantity[0].value ? quantity[0].value : 0}
                    onChange={(event) => handleQuantity(event, 0)}
                  />
                </div>
              </div>
            </div>

            <label className={'mt-20'}>Slippage Tolerance: {tolerance}</label>

            <button className={'button mt-15'}>
              <i className={'fas fa-wallet'} /> Connect Wallet
            </button>
          </div>
        )}
      </section>
    );
  }

  return (
    <div className={'main'}>
      <div className={'flex-box'}>
        <div className={'row'} style={{ width: '600px' }}>
          <div className={'column'} style={{ height: '500px' }}>
            Pair: <b>{pair}</b> <br />
            Quantity: <b>{JSON.stringify(quantity)}</b> <br />
            Toggle: <b>{JSON.stringify(toggle)}</b> <br />
            Trx speed: <b>{trxspeed}</b> <br />
            Tolerance: <b>{tolerance}</b> <br />
            Deadline: <b>{deadline}</b> <br />
            Multihops: <b>{JSON.stringify(multihops)}</b> <br />
            Expert mode: <b>{JSON.stringify(expert)}</b>
          </div>
        </div>
        <div className={'row'} style={{ width: '300px' }}>
          <div className={'column'} style={{ height: '500px' }}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Swap;
