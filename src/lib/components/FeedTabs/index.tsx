import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Card,
  Divider,
  Text,
  Image,
} from '@chakra-ui/react';
import SortIcon from '../../../assets/icons/sort.svg';

interface IProps {
  classRoomFeed: React.ElementType;
  students: React.ElementType;
  filesAndMedia: React.ElementType;
}

export function FeedTabs(props: IProps) {
  return (
    <Tabs variant={'none'} color={'#667085'} mb={4}>
      <TabList>
        <Flex
          as={Card}
          display={'flex'}
          flexDirection={'row'}
          shadow={'md'}
          gap={5}
          pt={2}
          px={4}
          borderRadius={'md'}
          width={'100%'}
          bg={'white'}
        >
          <Tab
            _selected={{
              color: '#3131D7',
              borderBottomColor: '#3131D7',
              borderBottomWidth: '2px',
            }}
            border={'none'}
            shadow={'none'}
            _hover={{ shadow: 'none' }}
            _focus={{ shadow: 'none' }}
            _active={{ shadow: 'none' }}
            px={0}
            py={2}
            borderBottom={'2px solid white'}
            borderRadius={0}
            fontWeight='medium'
            color={'gray'}
          >
            Classroom Feed
          </Tab>
          <Tab
            _selected={{
              color: '#3131D7',
              borderBottomColor: '#3131D7',
              borderBottomWidth: '2px',
            }}
            color={'gray'}
            border={'none'}
            shadow={'none'}
            _hover={{ shadow: 'none' }}
            _focus={{ shadow: 'none' }}
            _active={{ shadow: 'none' }}
            px={0}
            py={2}
            borderBottom={'2px solid white'}
            borderRadius={0}
            fontWeight='medium'
          >
            All Students
          </Tab>
          <Tab
            color={'gray'}
            _selected={{
              color: '#3131D7',
              borderBottomColor: '#3131D7',
              borderBottomWidth: '2px',
            }}
            border={'none'}
            shadow={'none'}
            _hover={{ shadow: 'none' }}
            _focus={{ shadow: 'none' }}
            _active={{ shadow: 'none' }}
            px={0}
            py={2}
            borderBottom={'2px solid white'}
            borderRadius={0}
            fontWeight='medium'
          >
            Files & Media
          </Tab>
        </Flex>
      </TabList>
      <Flex my={2} alignItems='center' gap={2}>
        <Divider orientation='horizontal' flex={1} />
        <Text style={{ whiteSpace: 'nowrap' }}>Recent Post</Text>
        <Image src={SortIcon} />
      </Flex>

      <TabPanels>
        <TabPanel p={0} pt={2}>
          <props.classRoomFeed />
        </TabPanel>
        <TabPanel p={0} pt={2}>
          <props.students />
        </TabPanel>
        <TabPanel p={0} pt={2}>
          <props.filesAndMedia />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
