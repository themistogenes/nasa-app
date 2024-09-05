export default function SideBar({ handleToggleModal, data }) {
  return (
    <div className="sidebar">
      <div 
        className="bgOverlay"
        onClick={handleToggleModal}
      >
      </div>
      <div className="sidebarContent">
        <h2>{data?.title}</h2>
        <div>
          <p className="descriptionTitle">{data?.date}</p>
          <p className="descriptionContainer">
            {data?.explanation}
          </p>
        </div>
        <button
          onClick={handleToggleModal}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}