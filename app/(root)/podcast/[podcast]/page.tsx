import React from 'react'

const PodcastDetails = ({params} : {params: {podcast: string}}) => {
  return (
    <div className='text-white-1'>
        Podcast {params.podcast}
    </div>
  )
}

export default PodcastDetails
