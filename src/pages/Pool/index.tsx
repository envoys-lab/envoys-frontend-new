import React, { useState, useEffect } from 'react'
import Tokens from '../../tokens'

import '../app.scss'

const stake = {
  name: 'TestCoin',
  symbol: 'tcoin',
  icon: 'https://pancakeswap.finance/images/tokens/0x7961Ade0a767c0E5B67Dd1a1F78ba44F727642Ed.svg',
  contract: '0x7961Ade0a767c0E5B67Dd1a1F78ba44F727642Ed',
}

const Pool: React.FC = () => {
  const [tokens, setTokes] = useState([])
  const [search, setSearch] = useState('')
  const [active, setActive] = useState(0)

  const eventHandler = (e, index) => {
    e.preventDefault()
    setActive(index)
  }

  useEffect(() => {
    setTokes(
      Tokens.filter((entry) => Object.values(entry).some((val) => typeof val === 'string' && val.includes(search))),
    )
  }, [search])

  return (
    <div className={'main'}>
      <div className={'pool'}>
        <div className={'flex-box'}>
          <div className={'row'} style={{ width: '600px' }}>
            <div className={'column'} style={{ height: '200px' }}>
              <div className={'flex-box center mt-20'}>
                <div>
                  <div className={'flex-box center'}>
                    <div>
                      <img width={40} src={stake.icon} />
                    </div>
                    <div>
                      <h1 className={'uppercase blue--text mlm-15 fs-20'}>Syrup Pools {stake.name}</h1>
                    </div>
                  </div>
                  <div className={'mt-20'}>Just stake some tokens to earn.</div>
                </div>
              </div>
            </div>
          </div>
          <div className={'row'} style={{ width: '300px' }}>
            <div className={'column text-center'} style={{ height: '200px' }}>
              <div className={'blue--text mt-20'}>
                Auto {stake.symbol} <span className={'uppercase'}>{stake.symbol}</span> bounty
              </div>
              <div className={'grey--text mt-20'}>
                <b className={'earned ma-auto'}>0.0</b>
              </div>
              <div className={'mt-20'}>
                <button className={'button'}>Claim</button>
              </div>
            </div>
          </div>
        </div>

        <div className={'flex-box'}>
          <div className={'row'} style={{ width: '100%' }}>
            <div className={'column pa-0 overflow-y'} style={{ height: '600px' }}>
              <div className={'search ma-0'}>
                <input
                  className={'light'}
                  type={'text'}
                  placeholder={'Search pools'}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>

              <ul className={'list'}>
                {tokens.length ? (
                  tokens.map((item, index) => (
                    <span key={item.symbol}>
                      <li className={'item'}>
                        <div className={'p-row flex-grow icon'}>
                          <img className={'token-icon'} width={40} src={item.icon} />
                          <img className={'stake-icon'} width={25} src={stake.icon} />
                        </div>
                        <div className={'p-row flex-grow title'} style={{ width: '180px' }}>
                          <div className={'mlm-15'}>
                            <b>
                              Earn <span className={'uppercase'}>{item.symbol}</span>
                            </b>
                          </div>
                          <div className={'mlm-15'}>
                            <small>
                              Stake <span className={'uppercase'}>{stake.symbol}</span>
                            </small>
                          </div>
                        </div>
                        <div className={'p-row flex-grow'} style={{ width: '150px' }}>
                          <div>
                            <small className={'blue--text'}>
                              <span className={'uppercase'}>{item.symbol}</span> Earned
                            </small>
                          </div>
                          <div>
                            <span className={'grey--text mt-5 earned'}>0.0</span>
                          </div>
                        </div>
                        <div className={'p-row flex-grow'} style={{ width: '120px' }}>
                          <div>
                            <small className={'grey--text'}>
                              <b>APR</b> (51.12%)
                            </small>
                          </div>
                        </div>
                        <div className={'p-row flex-grow'} style={{ width: '120px' }}>
                          <span className={'caret'}>
                            <i className={'fas fa-calculator'} />
                          </span>
                        </div>
                        <div className={'p-row flex-grow'} style={{ width: '150px' }}>
                          <div>
                            <small className={'blue--text'}>Total staked</small>
                          </div>
                          <div>
                            <small className={'grey--text mt-5'}>
                              282,5455 <span className={'uppercase'}>{stake.symbol}</span>
                            </small>
                          </div>
                        </div>
                        <div className={'p-row flex-grow'} style={{ width: '180px' }}>
                          <div>
                            <small className={'blue--text'}>Ends in</small>
                          </div>
                          <div>
                            <small className={'grey--text mt-5'}>
                              197,542 blocks <i className={'far fa-clock'} />
                            </small>
                          </div>
                        </div>
                        <div className={'p-row'}>
                          <span onClick={(e) => eventHandler(e, index)} className={'caret right-fix'}>
                            <i className={active === index ? 'fas fa-arrow-circle-down' : 'fas fa-arrow-circle-up'} />
                          </span>
                        </div>
                      </li>
                      <div className={active === index ? 'panel-open' : 'panel-close'}>
                        <section className={'panel-body'}>
                          <div className={'flex-box center'}>
                            <div className={'row'}>
                              <div>
                                <i className={'grey--text far fa-check-circle'} /> {item.name}
                              </div>
                              <div className={'mt-5'}>
                                <i className={'grey--text fas fa-link'} />{' '}
                                <a href={'https://etherscan.io/token/' + item.contract} target={'_blank'}>
                                  <small>See Token Info</small>
                                </a>
                              </div>
                              <div className={'mt-5'}>
                                <i className={'grey--text fas fa-link'} />{' '}
                                <a href={'https://etherscan.io/address/' + item.contract} target={'_blank'}>
                                  <small>View contract</small>
                                </a>
                              </div>
                            </div>
                            <div className={'row'}>
                              <div className={'uppercase'}>
                                <span className={'blue--text'}>{stake.symbol}</span>{' '}
                                <span className={'grey--text'}>earned</span> (0)
                              </div>
                            </div>
                            <div className={'row'}>
                              <button className={'button'}>
                                <i className={'fas fa-wallet'} /> Connect Wallet
                              </button>
                            </div>
                          </div>
                        </section>
                      </div>
                    </span>
                  ))
                ) : (
                  <li className={'none'}>No results were found for your search. </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Pool
