import { Card, Box, Text, CardBody, Image } from '@chakra-ui/react';
import { LuDownload } from 'react-icons/lu';
// import PdfIcon from '../assets/icons/pdf.svg';
// import PdfIcon from '../../public/assets/icons/pdf.svg';

interface IProps {
  fileName: string;
  size: string;
  fileType: string;
  onDownload: (fileId: string) => void;
  fileId: string;
}

export function PdfComponent(props: IProps) {
  return (
    <Card
      shadow={'none'}
      border={'1px solid #EAECF0'}
      width='100%'
      borderRadius='xl'
      size='sm'
    >
      <CardBody
        display='flex'
        flexDirection='row'
        alignItems='center'
        color='gray.500'
        justifyContent='space-between'
      >
        <Box display='flex' alignItems='center' gap={4} flexDirection='row'>
          {/* TODO: anotherFile type */}
          <Image
            src={
              props.fileType === 'PDF'
                ? 'public/assets/icons/pdf.svg'
                : 'public/assets/icons/pdf.svg'
            }
          />
          <Box>
            <Text fontSize='14px' fontWeight='500'>
              {props.fileName}
            </Text>
            <Text fontSize='14px' fontWeight='400'>
              {props.size}
            </Text>
          </Box>
        </Box>

        <LuDownload
          style={{ color: '#667085', cursor: 'pointer' }}
          onClick={() => props.onDownload(props.fileId)}
          size={20}
        />
      </CardBody>
    </Card>
  );
}
