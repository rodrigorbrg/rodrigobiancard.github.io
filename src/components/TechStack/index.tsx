import { Article, Airplay, Balloon, Briefcase } from 'phosphor-react'

const features = [
  {
    name: 'React Native',
    description:
      'Developed an app using React Native, React Hooks, Typescript, Redux, consuming API service, and created a CI/CD to publish in all stores.',
    icon: Article,
  },
  {
    name: 'Android',
    description:
      'Knowledge of Android SDK, different versions of Android. Connect Android applications to back-end services, cloud message APIs and push notifications. Proficient understanding of code versioning tools with continuous integration',
    icon: Airplay,
  },
  {
    name: 'Node.js',
    description:
      'Deploy, manage, Node.js web applications using Amazon Web Services.',
    icon: Balloon,
  },
  {
    name: 'React',
    description:
      '',
    icon: Briefcase,
  },
]

export default function TechStack() {
  return (
    <div className="py-12 bg-[#18181B] rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl sm:text-4xl text-white-600 font-semibold tracking-wide uppercase">Rodrigo Biancard</h2>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white-900 ">
            Software Engineer | Mobile Developer
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p> */}
        </div>

        <div className="mt-10 bg-[#18181B] ">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md  bg-[#ef4e7b] text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-white-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}