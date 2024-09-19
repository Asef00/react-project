import { useState } from 'react'
import TabButton from './TabButton'
import { TAB_CONTENT } from '../data'
import Section from './Section'
import Tabs from './Tabs'

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState<string>()

  const handleSelect = (key: string) => {
    setSelectedTab(key)
  }

  function TabButtons() {
    return (
      <>
        <TabButton
          isActive={selectedTab === 'components'}
          onSelect={() => handleSelect('components')}
        >
          Components
        </TabButton>
        <TabButton
          isActive={selectedTab === 'jsx'}
          onSelect={() => handleSelect('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isActive={selectedTab === 'props'}
          onSelect={() => handleSelect('props')}
        >
          Props
        </TabButton>
        <TabButton
          isActive={selectedTab === 'state'}
          onSelect={() => handleSelect('state')}
        >
          State
        </TabButton>
      </>
    )
  }

  let tabContent = <p className="mt-4">Please select a topic.</p>

  if (selectedTab) {
    tabContent = (
      <div className="p-10 mt-4 text-start rounded-md bg-gray-800">
        <h3 className="font-semibold text-white text-xl mb-4">
          {TAB_CONTENT[selectedTab].title}
        </h3>
        <p>{TAB_CONTENT[selectedTab].desc}</p>
        <pre>
          <code>{TAB_CONTENT[selectedTab].code}</code>
        </pre>
      </div>
    )
  }

  return (
    <Section title="Examples" {...{ className: 'mt-6' }}>
      {/* tab buttons */}
      <Tabs
        className="mt-4 flex gap-2 justify-center"
        buttons={<TabButtons />}
        tabContent={tabContent}
      ></Tabs>
    </Section>
  )
}
