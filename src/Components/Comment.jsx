import Paul from "../assets/paul.png";

const Comment = (props) => {
    return (
    <div className="bg-white text-black w-[575px] pt-10 pl-14 pb-10 max-sm:p-2 max-sm:w-auto transition-all ease-in  delay-150 duration-700">
    <div className="gap-[24px] flex flex-col">
      <div>
        <p>
          I have been a customer of Weldlok for over 5 years now, in
          this time I have been nothing but pleased with the service and
          quality. Weldlok always goes above and beyond my expectations.
        </p>
      </div>
      <div className="flex gap-[12px]">
        <figure>
          <img src={Paul} alt="" className="rounded-md" />
        </figure>
        <div className="flex flex-col justify-start ">
          <h3>{props.name}</h3>
          <span>{props.position}</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Comment
