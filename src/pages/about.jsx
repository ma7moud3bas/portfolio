import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={"_blank"}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Mahmoud Abbas</title>
        <meta
          name="description"
          content="I’m Mahmoud Abbas. I live in Alexandria, and I love to travel."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m <span className='text-teal-500'>Mahmoud Abbas</span>. I live in Alexandria, and I love to travel.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                As far back as I can remember, I&apos;ve been a maker. My journey with computers began at the tender age of 6, when I got my first PC.
              </p>

              <p>
                At first, I only knew how to play games, but as time went on, my curiosity grew, and I delved deeper into the inner workings of computers. I learned how all the pieces fit together, built my own computer, and even got introduced to programming by my older brother. Since then, my passion for technology has only grown stronger, and I&apos;ve been on an exciting journey of discovery and innovation ever since.
              </p>

              <p>
                From humble beginnings of creating a simple login page that wasn&apos;t even functional, I was over the moon with my first taste of web development. As I continued to learn and grow, I stumbled across Microverse, where I honed my skills in full-stack web development, fueling my passion for creating cutting-edge web applications.
              </p>

              <p>
                Apart from my love for coding, I also have a deep passion for traveling. Exploring new cultures, embarking on great adventures, and experiencing the wonders of the world bring me immense joy. In fact, I have a goal to travel the world before I turn 30, seeking inspiration from diverse experiences and enriching my worldview.
              </p>

              <p>
                Throughout my career, I&apos;ve had the opportunity to create innovative products that have delighted users and made a real impact. From my humble beginnings to where I am today, I&apos;m constantly driven to push the boundaries of what's possible and leave a lasting mark in the world of web development.
              </p>

              <p>
                At Enzyme, I had a blast developing the frontend web application for the Enzyme web3 dashboard using Next.js and TypeScript. I created a web3 multi-chain dashboard that made smart contract creation a breeze, even for non-coders! I also built a script that could embed the dashboard functionalities into external websites, taking the application&apos;s reach to new heights.
              </p>

              <p>
                And that&apos;s not all!
              </p>

              <p>
                I also designed and developed a website builder that used GPT-3 to generate fully-functional websites from user descriptions. Talk about cutting-edge!
              </p>

              <p>
                But that&apos;s not where the fun ends.
              </p>

              <p>
                At Quickmail, I took the landing page to the next level by adding exciting new features that improved user experience and gave the website a fresh new look. I also geeked out on optimizing the codebase, automating the build process, and implementing best practices to boost the website&apos;s SEO, accessibility, and overall performance.
              </p>

              <p>
                The result? A whopping 15% decrease in bounce rate!
              </p>

              <p>
                With my love for frontend development, my eagerness for learning new technologies related to backend development, and knack for creating user-friendly experiences, I&apos;m always up for new challenges and ready to bring my creativity to any project.
              </p>

              <p>
                I&apos;m currently looking for a new opportunity as a frontend engineer or a FE-heavy fullstack engineer, so if you have a project that you think I&apos;d be a good fit for, don&apos;t hesitate to reach out!
              </p>
              <p className='font-bold text-white'>
                Let&apos;s collaborate and make something awesome together!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/mahmoud26369406" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://github.com/mahmoud717" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/mahmoud-m-abbas" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:mahmoudmohammad717@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                mahmoudmohammad717@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
