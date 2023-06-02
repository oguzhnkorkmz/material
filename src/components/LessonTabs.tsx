import { Tab, TabList, TabPanel, Tabs } from '@mui/joy'
import React from 'react'

export const LessonTabs = () => {
    return (
        <Tabs defaultValue={0}>
            <TabList>
                <Tab>First</Tab>
                <Tab>Second</Tab>
                <Tab>Third</Tab>
            </TabList>
            <TabPanel value={0}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis similique quisquam facere soluta eum, odit aliquid nihil mollitia sed quibusdam, corrupti alias illo non magnam temporibus explicabo quia possimus.
            </TabPanel>
            <TabPanel value={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui similique, minima praesentium itaque, autem, nam labore placeat quae facere esse quia! Exercitationem doloribus architecto pariatur dolores molestias nesciunt accusantium eos?
            </TabPanel>
            <TabPanel value={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda cupiditate vel eos itaque! Soluta dolore magnam, similique vitae quod maxime accusantium nam blanditiis, excepturi quaerat hic dolores, corporis facere?
            </TabPanel>
        </Tabs>
    )
}
