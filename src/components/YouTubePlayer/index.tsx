import React from 'react'

const parse = function (url: string): string | false {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  var match = url.match(regExp)
  return match && match[7].length == 11 ? match[7] : false
}

const YouTubePlayer: React.FC<{ src?: string }> = ({ src }) => {
  if (!src) {
    return <>Invalid youtube link</>
  }

  const id = parse(src)

  if (!id) {
    return <>Invalid youtube link</>
  }

  const fullLink = 'https://www.youtube.com/embed/' + id
  return (
    <div style={{ width: '100%', background: 'rgba(0,0,0,0.2)', borderRadius: '24px' }}>
      <iframe
        style={{ borderRadius: '24px' }}
        width="560"
        height="315"
        src={fullLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}

export default YouTubePlayer
