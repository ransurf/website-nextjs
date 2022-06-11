import Image from './Image'
import Link from './Link'

const Card = ({ title, description, date, madeWith, imgSrc, href }) => {
  const madeWithTags = madeWith.map((tool) => {
    return (
      <span
        key={tool}
        className="mr-2 mb-4 inline-flex items-center rounded-full bg-gray-100 p-2 py-0.5 text-sm font-medium leading-5 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
      >
        {tool}
      </span>
    )
  })

  return (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div
        className={`${
          imgSrc && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className="p-6">
          <div className="flex justify-between">
            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
              {href ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  {title}
                </Link>
              ) : (
                title
              )}
            </h2>
            <span className="text-lg leading-8">{date}</span>
          </div>
          {madeWithTags}
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primaryLight-500 hover:text-primaryLight-400 dark:text-primary-300 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
