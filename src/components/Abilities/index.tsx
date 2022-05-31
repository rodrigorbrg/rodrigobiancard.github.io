

function Abilities() {
  const strongest = [
    { name: 'React Native', style: 'w-[90%]', progress: '90%' },
    { name: 'Typescript', style: 'w-[90%]', progress: '90%' },
    { name: 'Android/Java', style: 'w-[80%]', progress: '80%' },
    { name: 'Node.js', style: 'w-[70%]', progress: '70%' },
    { name: 'Android/Kotlin', style: 'w-[70%]',  progress: '70%'},
    { name: 'React', style: 'w-[70%]',  progress: '70%'},
  ];

  const weakest = [
    { name: 'Python', style: 'w-[40%]', progress: '40%'},
    { name: 'HTML', style: 'w-[40%]', progress: '40%'},
    { name: 'SQL', style: 'w-[40%]', progress: '40%'},
    { name: 'CSS', style: 'w-[30%]', progress: '30%'},
    { name: 'Swift', style: 'w-[20%]', progress: '20%'},
  ];

  return (
    <div className="flex gap-2 w-[80%]">

      <div className="w-full">
        <h3 className="text-lg">Skills</h3>
        <p className="mb-16 min-w-[360px]">Some of my skills that I known.</p>

        <ul className="w-full mt-8">
          {
            strongest.map(element => {
              return (
                <li key={element.name} className="h-1 relative mb-16 rounded-lg bg-white w-full">
                  <strong className="absolute left-0 -top-8 text-md">{element.name}</strong>
                  <div className={`h-full relative rounded-lg bg-gray-500 animate-gradient-slow  ${element.style}`}>
                    <span className="bg-white rounded-sm text-black p-1 absolute right-0 -top-12 after:absolute after:left-[50%] after:-bottom-2 after:-ml-2  after:border-t-4 after:border-x-transparent after:border-solid after:border-t-white after:content-{''}">{element.progress}</span>
                  </div>
                </li>
              )
            })
          }  
        </ul>
      </div>

      <div className="w-full">
        <h3 className="text-lg">Weakness</h3>
        <p className="mb-16 min-w-[360px]">Here, some skills that I don't have, or I just know how to get by</p>

        <ul className="w-full mt-8">
          {
            weakest.map(element => {
              return (
                <li key={element.name} className="h-1 relative mb-16 rounded-lg bg-white w-full">
                  <strong className="absolute left-0 -top-8 text-md">{element.name}</strong>
                  <div className={`h-full relative rounded-lg bg-gray-500 animate-gradient-slow ${element.style}`}>
                    <span className="bg-white rounded-sm text-black p-1 absolute right-0 -top-12 after:absolute after:left-[50%] after:-bottom-2 after:-ml-2  after:border-t-4 after:border-x-transparent after:border-solid after:border-t-white after:content-{''}">{element.progress}</span>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>

    </div>
  )
}

export default Abilities