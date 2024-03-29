import { Avatar, Box, Button, Flex, Link, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { InstagramLogo, InstagramMobileLogo } from '../../assets/constants';
import { CreatePostLogo, NotificationsLogo, SearchLogo } from '../../assets/constants';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';
import SidebarItems from './SidebarItems';

const sidebarItems = [
  {
    id: 0,
    icon: <AiFillHome size={25} />,
    text: 'Home',
    link: '/',
  },
  {
    id: 1,
    icon: <SearchLogo />,
    text: 'Search',
  },
  {
    id: 2,
    icon: <NotificationsLogo />,
    text: 'Notifications',
  },
  {
    id: 3,
    icon: <CreatePostLogo />,
    text: 'Create',
  },
  {
    id: 4,
    icon: (
      <Avatar
        size={'sm'}
        name={'Sanjiv Kumar'}
        src=""
      />
    ),
    text: 'Profile',
    link: '/sanjiv',
  },
];

const Sidebar = () => {
  const { handleLogout, isLoggingOut } = useLogout();

  return (
    <Box
      height={'100vh'}
      borderRight={'1px solid'}
      borderColor={'whiteAlpha.300'}
      position={'sticky'}
      top={0}
      left={0}
      py={8}
      px={{ base: 2, md: 4 }}>
      <Flex
        w={'full'}
        height={'full'}
        direction={'column'}
        gap={10}>
        <Link
          to={'/'}
          as={RouterLink}
          pl={2}
          display={{ base: 'none', md: 'block' }}
          cursor={'pointer'}>
          <InstagramLogo />
        </Link>
        <Link
          to={'/'}
          as={RouterLink}
          p={2}
          display={{ base: 'block', md: 'none' }}
          cursor={'pointer'}
          borderRadius={6}
          _hover={{
            bg: 'whiteAlpha.200',
          }}
          w={10}>
          <InstagramMobileLogo />
        </Link>
        <Flex
          direction={'column'}
          gap={6}
          cursor={'pointer'}>
          <SidebarItems />
        </Flex>
        <Tooltip
          hasArrow
          label={'Logout'}
          placement={'right'}
          ml={1}
          openDelay={500}
          display={{ base: 'block', md: 'none' }}>
          <Flex
            onClick={handleLogout}
            alignItems={'center'}
            _hover={{ bg: 'whiteAlpha.400' }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: 'full' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            mt={'auto'}>
            <BiLogOut size={25} />
            <Button
              display={{ base: 'none', md: 'block' }}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              isLoading={isLoggingOut}>
              Logout
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
