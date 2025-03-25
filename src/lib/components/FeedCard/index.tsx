import { Box, Card, Flex, Image } from '@chakra-ui/react';
import { ProfileCard } from '../ProfileCard';
// import PinIcon from '../assets/icons/pin.png';
// import PinIcon from 'public/assets/icons/pin.png';
import { PdfComponent } from '../PdfComponents';

export interface IFile {
  fileName: string;
  fileType: string;
  fileId: string;
  fileSize: string;
  url: string;
}

export interface IProps {
  isPostedByClassInCharge: boolean;
  profilePicture: string;
  staffName: string;
  isPinned: string;
  description: string;
  subjectName: string;
  file: IFile;
  onDownload?: (fileId: string) => void;
  onFileClick?: (fileId: string) => void;
}

export const FeedCard = (props: IProps) => {
  function renderFile() {
    if (props.file.fileType === 'PDF') {
      return (
        <Box py={3} px={3}>
          <PdfComponent
            fileName={props.file.fileName}
            size={props.file.fileSize}
            fileType={props.file.fileType}
            onDownload={props.onDownload!}
            fileId={props.file.fileId}
          />
        </Box>
      );
    }

    if (props.file.fileType === 'IMAGE') {
      return (
        <Image
          objectFit='fill'
          w='100%'
          h='15rem'
          borderBottomRadius='md'
          src={props.file.url}
          onClick={() => props.onFileClick!(props.file.fileId)}
        />
      );
    }

    return <></>;
  }

  return (
    <Card my={3} borderRadius='md' boxShadow={'xl'} width='100%'>
      <Box p={4}>
        <Flex justifyContent={'space-between'}>
          <ProfileCard
            isPostedByClassInCharge={props.isPostedByClassInCharge}
            profileUrl={props.profilePicture}
            staffName={props.staffName}
            subjectName={props.subjectName}
          />
          {props.isPinned ? (
            <Image boxSize={'5'} src={'/public/assets/icons/pin.png'} />
          ) : (
            <></>
          )}
        </Flex>
        <Box mt={3} />
        <Box dangerouslySetInnerHTML={{ __html: props.description }}></Box>
      </Box>
      {renderFile()}
    </Card>
  );
};
