import { Badge, Text } from '@chakra-ui/react';
import { FaRegStar } from 'react-icons/fa';

export interface IProps {
  label?: string;
}

export function ClassInChargeBadge(props: IProps) {
  return (
    <Badge
      variant='outline'
      color={'#2323C7'}
      borderRadius={'md'}
      bg={'#F5F5FF'}
      border={'1px solid #A0A0FA'}
      outline={'0px solid inherit'}
      boxShadow={'none'}
      display={'flex'}
      alignItems={'center'}
      gap={1}
    >
      <FaRegStar />
      <Text fontSize={'12px'} fontWeight={'500'} color={'#2323C7'}>
        {props.label ?? 'Class Incharge'}
      </Text>
    </Badge>
  );
}
