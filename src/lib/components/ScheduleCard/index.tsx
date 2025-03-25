import { Card, Box, Text, CardHeader, CardBody, Link } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import { TfiTime } from 'react-icons/tfi';

interface ISchedule {
  timing: string;
  staffName: string;
  subject: string;
}

interface IProps {
  schedules: ISchedule[];
  onViewAll: () => void;
}

function ScheduleCard(props: IProps) {
  return (
    <Card boxShadow={'xl'} borderRadius='md' width='100%'>
      <CardHeader
        p={4}
        fontWeight='700'
        fontSize='18px'
        color='#4300B1'
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent={'space-between'}
      >
        <Box display='flex' gap={2} alignItems='center'>
          <TfiTime />
          <Text>Tomorrow's Schedule</Text>
        </Box>
        <Box
          onClick={props.onViewAll}
          as={Link}
          display='flex'
          gap={1}
          alignItems='center'
        >
          <Text color='#4300B1' fontSize={'12px'} fontWeight={'600'}>
            View All
          </Text>
          <FaChevronRight fontSize={'10px'} />
        </Box>
      </CardHeader>

      <CardBody p={4}>
        {props.schedules.map((schedule, i) => {
          return (
            <Box
              key={`schedule-${i}`}
              mb={4}
              display='flex'
              width='100%'
              borderRadius='sm'
              bg='#F5F5FF'
              justifyContent='space-between'
              alignItems='center'
              px={8}
              py={3}
            >
              <Text fontWeight='500' fontSize='14px'>
                {schedule.timing}
              </Text>
              <Box fontWeight='600' fontSize='14px' textAlign='right'>
                <Text>{schedule.staffName}</Text>
                <Text>{schedule.subject}</Text>
              </Box>
            </Box>
          );
        })}
      </CardBody>
    </Card>
  );
}

export default ScheduleCard;
