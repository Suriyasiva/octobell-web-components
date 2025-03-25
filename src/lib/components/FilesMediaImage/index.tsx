import { Box, Image, Text } from '@chakra-ui/react';

interface IFile {
  fileUrl: string;
  fileName: string;
  uploadedAt: string;
  uploadedBy: string;
  subject: string;
  fileId: string;
}

interface IProps {
  file: IFile;
  onImageCLick: (fileId: string) => void;
}

export function FilesMediaImage(props: IProps) {
  // const [isModalOpen, imoState] = useBoolean(false);
  return (
    <>
      <Box
        borderRadius='lg'
        overflow='hidden'
        position='relative'
        boxShadow='xl'
        width='200px'
        height='150px'
        cursor={'pointer'}
        onClick={() => {
          props.onImageCLick(props.file.fileId);
          // imoState.on();
        }}
      >
        <Image src={props.file.fileUrl} w='100%' h='100%' objectFit='fill' />

        <Box
          position='absolute'
          bottom='0'
          left='0'
          px={4}
          py={2}
          color='white'
          w='100%'
          textShadow='0px 2px 4px rgba(0, 0, 0, 0.5)'
        >
          <Box color={'#fff'} alignItems='flex-start'>
            <Text color={'#fff'} fontSize='sm' fontWeight='bold'>
              {props.file.subject}
            </Text>
            <Text color={'#fff'} fontSize='sm' fontWeight='medium'>
              By: {props.file.uploadedBy}
            </Text>
            <Text color={'#fff'} fontSize='sm' fontWeight='medium'>
              {props.file.uploadedAt}
            </Text>
          </Box>
        </Box>
      </Box>

      {/* <FilesModal isOpen={isModalOpen} onClose={imoState.off} /> */}
    </>
  );
}
