import { Flex, Box, Image, Text, Avatar, AvatarGroup } from '@chakra-ui/react';
import { LuUsersRound } from 'react-icons/lu';

interface IAvatarProps {
  studentName: string;
  studentProfilePicture: string;
}

interface IProps {
  standard: string;
  section: string;
  classInChargeName: string;
  studentCounts: string;
  students: IAvatarProps[];
}

export function SectionInfo(props: IProps) {
  return (
    <Box
      background='linear-gradient(270deg, #6A11CB 0%, #2575FC 100%)'
      borderRadius='xl'
      p={6}
      boxShadow='xl'
      mb={4}
    >
      <Flex justify='space-between' align='center'>
        <Flex alignItems='start' gap={2}>
          <Image src={'assets/icons/book.png'} alt='sun-icon' />
          <Box>
            <Text
              fontSize={{ base: 'lg', md: '4xl' }}
              fontWeight='bold'
              color='white'
            >
              {props.standard} - {props.section}
            </Text>
            <Flex alignItems='center' gap={2}>
              <Text color='white'>Class InCharge:&nbsp;</Text>
              <Text fontSize={'md'} fontWeight='bold' color='white'>
                {props.classInChargeName}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Flex alignItems='start' gap={2}>
          <Box>
            <Flex alignItems={'center'} gap={2} color={'#fff'}>
              <LuUsersRound fontSize={'20px'} color='#fff' />
              <Text color={'#fff'}>{props.studentCounts} Students</Text>
            </Flex>
            <Flex alignItems='center' gap={2}>
              <AvatarGroup mt={2} size='sm' max={5}>
                {props.students.map((avatar: IAvatarProps) => {
                  return (
                    <Avatar
                      name={avatar.studentName}
                      src={avatar.studentProfilePicture}
                    />
                  );
                })}
              </AvatarGroup>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
