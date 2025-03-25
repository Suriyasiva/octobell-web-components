import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';
import { ClassInChargeBadge } from '../ClassInchargeBadge';

interface IProps {
  staffName: string;
  subjectName: string;
  profileUrl: string;
  postedDate?: string;
  isPostedByClassInCharge: boolean;
}

export function ProfileCard(props: IProps) {
  return (
    <Flex gap={3} align='center'>
      <Avatar size='sm' name={props.staffName} src={props.profileUrl} />
      <Flex flexDirection='column' justify='start'>
        <Flex gap={2}>
          <Heading size='xs' fontWeight='600' lineHeight='shorter'>
            {props.staffName}
          </Heading>
          {props.isPostedByClassInCharge ? <ClassInChargeBadge /> : <></>}
        </Flex>
        <Flex color='gray.500' gap={3}>
          <Text fontSize='xs' fontWeight='600'>
            {props.subjectName}
          </Text>
          {props.postedDate ? <Text fontSize='xs'>22 Jan 2025</Text> : <></>}
        </Flex>
      </Flex>
    </Flex>
  );
}
