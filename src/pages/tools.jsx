import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Tools() {
  return (
    <>
      <Head>
        <title>Tools - Mahmoud Abbas</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” ASUS Zyphrus m16 (2022)">
              State of the art laptop that packs a very powerful gear while being ultra portable.
            </Tool>
            <Tool title="LG UltraGear 27” monitor">
              Great color gamut and good looking image.
            </Tool>
            <Tool title="Logitech g613 rgb keyboard">
              Not the best out there but it gets the job done.
            </Tool>
            <Tool title="Logitech g502 gaming mouse">
              The OG of gaming mice, and it has a really nice grip to it.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual studio code">
              Best IDE to get hte job done. period.
            </Tool>
            <Tool title="WSL2">
              The integrated linux shell allows me to get the best of both worlds. Great development environment from linux and the versatility of windows.
            </Tool>
            <Tool title="Docker">
              I use Docker to run my development environment. It’s a great way to keep your dev environment consistent across machines when you are on a team especially if you are using windows.
            </Tool>
            <Tool title="oh-my-zsh">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the normal Terminal but it’s what I use.
            </Tool>
            <Tool title="Github Copilot">
              It’s been a huge help in my day to day work. Avoiding the need to google things is a huge time saver.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Documentation tools">
            <Tool title="Notion">
              We use Notion for everything. It’s my wiki, my todo list, my kanban board and everything in between.
            </Tool>
            <Tool title="Postman docs">
              We use Postman docs to document our APIs. It’s a great tool for documenting APIs and it’s free.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
