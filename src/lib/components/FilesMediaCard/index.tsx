import {
  Avatar,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { FiDownload } from 'react-icons/fi';

export interface IFile {
  fileName: string;
  fileId: string;
  fileType: string;
  uploadedAt: string;
  size: string;
}

export interface IFileInfo {
  file: IFile;
  uploadedBy: string;
  subject: string;
}

export interface IProps {
  fileInfo: IFileInfo;
  onDownload: (fileId: string) => void;
}

export function FilesMediaCard(props: IProps) {
  function renderFileIcon() {
    if (props.fileInfo.file.fileType === 'PPT') {
      return <Image src={'/public/assets/icons/ppt-icon.svg'} />;
    }
    if (props.fileInfo.file.fileType === 'XLS') {
      return <Image src={'/public/assets/icons/xls-icon.svg'} />;
    }
    return <></>;
  }
  return (
    <Card mb={4} p={0} borderRadius='lg' boxShadow='sm' bg='#F5F5FF'>
      <CardBody
        px={3}
        py={6}
        display='flex'
        pr={4}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box display='flex' gap={3} alignItems={'center'}>
          <Avatar bg='none'>{renderFileIcon()}</Avatar>
          <Box display='flex' flexDirection='column' alignItems='start'>
            <Heading fontSize='14px' fontWeight='600'>
              {props.fileInfo.file.fileName}
            </Heading>
            <Text fontSize='12px' fontWeight='400' color='gray.600'>
              {props.fileInfo.file.uploadedAt}
            </Text>
            <Text fontSize='12px' fontWeight='400' color='gray.600'>
              {props.fileInfo.file.size}
            </Text>
          </Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'end'}
          alignItems={'end'}
        >
          <Heading fontSize='14px' fontWeight='600'>
            {props.fileInfo.uploadedBy}
          </Heading>
          <Text fontSize='12px' fontWeight='400' color='gray.600'>
            {props.fileInfo.subject}
          </Text>
          <Box
            onClick={() => props.onDownload(props.fileInfo.file.fileId)}
            display='flex'
            cursor={'pointer'}
            color='#3131D7'
            gap={2}
            alignItems='center'
            mt={1}
          >
            <FiDownload size={14} />
            <Text fontSize='12px' fontWeight='500'>
              Download
            </Text>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
}
