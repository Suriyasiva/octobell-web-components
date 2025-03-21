import {
  Card,
  CardBody,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React from 'react';

interface IProps {
  imagesTab: React.ReactNode;
  documentsTab: React.ReactNode;
}

export function FilesMediaSection(props: IProps) {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <Card my={3} borderRadius='md' width='100%'>
      <Tabs defaultIndex={0} variant='subtle'>
        <CardBody gap={2}>
          <Flex gap={3} alignItems='center' justifyContent='space-between'>
            <Text fontWeight='700' fontSize='18px' color='#4300B1'>
              Files & Media
            </Text>
            <TabList>
              <Tab
                onClick={() => setSelectedTab(0)}
                color={selectedTab === 0 ? '#2323C7' : '#667085'}
                bg={selectedTab === 0 ? '#F5F5FF' : '#fff'}
                fontSize='14px'
                fontWeight='600'
                _selected={{
                  color: '#3131D7',
                  borderBottomColor: '#3131D7',
                  borderBottomWidth: '2px',
                }}
                shadow={'none'}
                _hover={{ shadow: 'none' }}
                _focus={{ shadow: 'none' }}
                _active={{ shadow: 'none' }}
                px={2}
                py={2}
                mr={2}
                border={'none'}
              >
                Images
              </Tab>
              <Tab
                onClick={() => setSelectedTab(1)}
                color={selectedTab === 1 ? '#2323C7' : '#667085'}
                bg={selectedTab === 1 ? '#F5F5FF' : '#fff'}
                fontSize='14px'
                fontWeight='600'
                _selected={{
                  color: '#3131D7',
                  borderBottomColor: '#3131D7',
                  borderBottomWidth: '2px',
                }}
                shadow={'none'}
                _hover={{ shadow: 'none' }}
                _focus={{ shadow: 'none' }}
                _active={{ shadow: 'none' }}
                px={2}
                py={2}
                mr={2}
                border={'none'}
              >
                Documents
              </Tab>
            </TabList>
          </Flex>

          <TabPanels>
            <TabPanel py={2} px={0}>
              {props.imagesTab}
            </TabPanel>
            <TabPanel py={2} px={0}>
              {props.documentsTab}
            </TabPanel>
          </TabPanels>
        </CardBody>
      </Tabs>
    </Card>
  );
}
