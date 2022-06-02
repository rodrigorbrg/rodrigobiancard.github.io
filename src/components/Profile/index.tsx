import me from "../../assets/me.png";

function Profile() {
  return (
    <div>
      <div className="relative -mb-20 -top-[80px]">
        <div className="text-center -mb-20 text-sm items-center min-h-[148px] max-w-full">
          <div className="flex flex-row mb-3 mx-auto justify-center items-center">
            <img className="h-[148px]" src={me} alt="My Photo"/>
            <a href="mailto:rodrigorbrg@gmail.com" className="h-12 w-12">
              <div className="block text-center bg-green-800 rounded-full w-full h-full shadow-sm shadow-gree-900 ">
                <span className="text-lg text-white font-medium">+</span>
              </div>
            </a>
          </div>
          <div className="text-3xl text-white text-light ">Rodrigo Biancard</div>
          <div className="text-md">Mobile Developer &amp; Software Engineer</div>
          {/* <div className="my-6 text-center inline-block">
            <a target="blank" href="https://github.com/" className="bg-[#304fff] rounded-full relative inline-block  mr-1 w-10 h-10">
              <span className="w-full h-full "><i className="bg-white before:content-['']"></i></span>
            </a>
            <a href="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" className="bg-[#304fff] rounded-full relative inline-block mr-1 w-10 h-10">
              <span className="w-full h-full "><i className="bg-white before:content-['']"></i></span>
            </a>
          </div> */}
        </div>
        
      </div>
      {/* <p className="text-left px-40 leading-6 text-white mb-0 mt-0 text-sm font-light" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
      <div className="mb-12 my-10 max-w-4xl mx-auto items-center justify-center flex relative">
        <div className="px-4 text-center ">
          <h5 className="text-green-500 text-4xl font-normal font-[poppins-semibold] p-0 m-0 box-border leading-6 mb-4">About Me</h5>
          <h1 className="text-center text-5xl text-white font-normal font-[poppins-semibold] p-0 m-0  box-border leading-6 mb-2">Who am I?</h1>
        </div>   		
        <p className="m-0 p-0 px-10 md:px-6 sm:px-2 break-words">
            <span className="text-justify font-[lora-regular] font-normal text-2xl leading-8">Mobile Developer, software engineer, </span>
            <br/>
            <span className="text-justify font-[lora-regular] font-normal text-2xl leading-8">Lorem ipsum dolor sit amet</span>
            <br/>
            <span className="text-justify font-[lora-regular] font-normal text-2xl leading-8">In vitae ultricies lacus vitae</span>
            <br/>
            <span className="text-justify font-[lora-regular] font-normal text-2xl leading-8">Pellentesque blandit libero'</span>
            <br/>
          </p>		
      </div>

    </div>
  )
}

export default Profile;