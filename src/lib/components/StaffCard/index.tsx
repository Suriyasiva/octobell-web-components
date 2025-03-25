import { Box, Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { ProfileCard } from '../ProfileCard';
import GraduationIcon from '../../../assets/icons/graduation.svg';

interface IStaffs {
  staffName: string;
  subject: string;
  profileUrl: string;
}

interface IProps {
  staffs: IStaffs[];
}

function StaffCard(props: IProps) {
  return (
    <Card borderRadius='md' width='100%' boxShadow='xl'>
      <CardBody>
        <Box display='flex' gap={2} alignItems='center'>
          <Image
            src={GraduationIcon}
            alt='Graduation Icon'
            boxSize={6}
            objectFit='contain'
          />
          <Heading fontSize='16px' fontWeight='600'>
            Teaching Staffs
          </Heading>
        </Box>
        <Box py={4}>
          {props.staffs.map((staff, i) => {
            return (
              <Box key={`staff-${i}`} my={3}>
                <ProfileCard
                  isPostedByClassInCharge={false}
                  profileUrl={staff.profileUrl}
                  staffName={staff.staffName}
                  subjectName={staff.staffName}
                />
              </Box>
            );
          })}
        </Box>
      </CardBody>
    </Card>
  );
}

export default StaffCard;
