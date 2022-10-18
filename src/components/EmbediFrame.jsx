import React, { useEffect } from 'react'

const EmbediFrame = () => {
    // useEffect(() => {
    //     const img = document.getElementsByClassName('compactSound__artwork')
    //     console.log(img);
    // }, [])
    
  return (
    <div className="my-2 mx-3">
        <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1364853535&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"></iframe>
    </div>
  )
}

export default EmbediFrame