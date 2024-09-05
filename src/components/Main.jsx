export default function Main({ data }) {
  return (
    <div className="imgContainer">
      {
        data ? (
          <img src={data?.hdurl} alt="apod-picture" className="bgImage" />
        ) : (
          <img src="mars.png" alt="mars-demo-picture" className="bgImage" />
        )
      }
    </div>
  )
}