import {
  Button,
  Card,
  CardBody,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { LuCheck, LuListFilter } from 'react-icons/lu';

interface ISubject {
  subjectName: string;
  subjectId: string;
}

interface IProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  subjects: ISubject[];
  onFilterSelect: (selectedFilter: string) => void;
}

export function SearchFilter(props: IProps) {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  return (
    <Card>
      <CardBody>
        <Flex gap={4}>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <BiSearch color='gray.300' />
            </InputLeftElement>
            <Input
              borderColor={'#D0D5DD'}
              shadow={'none'}
              outlineColor={'0px solid inherit'}
              size={'md'}
              variant='outline'
              placeholder='Search Post, Subject'
              onChange={props.onChange}
            />
          </InputGroup>
          <Menu>
            <MenuButton
              as={Button}
              variant='outline'
              bg={'#fff'}
              _focus={{ bg: '#fff' }}
              _active={{ bg: '#fff' }}
              leftIcon={<LuListFilter />}
              pr={5}
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              Filter
            </MenuButton>
            <MenuList>
              {props.subjects.map((subject) => {
                return (
                  <MenuItem
                    borderRadius={'none'}
                    border={'0px solid inherit'}
                    boxShadow={'none'}
                    shadow={'none'}
                    outline={'0px solid inherit'}
                    onClick={() => {
                      props.onFilterSelect(subject.subjectId);
                      setSelectedSubject(subject.subjectId);
                    }}
                  >
                    {selectedSubject === subject.subjectId ? (
                      <LuCheck />
                    ) : (
                      <LuCheck style={{ visibility: 'hidden' }} />
                    )}{' '}
                    &nbsp;{subject.subjectName}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </Flex>
      </CardBody>
    </Card>
  );
}
