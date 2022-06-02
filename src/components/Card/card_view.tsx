

function Card({
  tech, 
  descriptions,
  icon,
}: {
  tech: string;
  descriptions: string[];
  icon: string;
}) {

  return (
    <div key={tech} className="flex-1 px-3">
      <div className="mb-5 p-10 sm:p-1 md:p-6 bg-black items-center rounded-3xl transition-all hover:animate-shadow-image duration-200" >
        <div className="w-28 h-28 flex items-center justify-center mx-auto mt-0 mb-6 rounded-[200px] transition duration-[5s] animate-gradient-image bg-gradient-to-r from-[#04e5e5] via-[#ef4e7b]  to-[#a166ab] "> 
          <img className="max-w-16 max-h-16" src={icon} alt="Mobile"/>
        </div>
        <h4 className="font-normal text-center text-2xl mb-4 leading-5 block box-sizing antialiased text-white ">{tech}</h4>
        <div className="h-1 w-12 m-auto mb-2 bg-[#04e5e5] block "></div>
        <ul className="mt-2 p-0">
          {
            descriptions.map(element => {
              return  <li key={element} className="text-center before:gradient-slow before:animate-gradient-slow before:inline-block before:relative before:bottom-1 before:content-[''] before:rounded-full before:h-1 before:w-1 before:mr-2 relative p-0 my-1">{element}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Card;
