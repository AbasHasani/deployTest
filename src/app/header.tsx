"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { FC, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import SignedIn from "./signedIn";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import {
  createStyles,
  Menu,
  Center,
  Header as MantineHeader,
  Container,
  Group,
  Button,
  Burger,
  rem,
} from "@mantine/core";
interface Props {
  session: Session | null;
}

import { useDisclosure } from "@mantine/hooks";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

interface HeaderProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
  session: Session | null;
}

export function Header({ links, session }: HeaderProps) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <MantineHeader height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={20}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <div>
          <Button radius="xl" h={30}>
            Get early access
          </Button>
          <Link href="/signin">
            <Button
              radius="xl"
              h={30}
              className="mr-5"
              // onClick={() => signIn()}
            >
              Sign in
            </Button>
          </Link>
        </div>
      </Container>
    </MantineHeader>
  );
}

// const Header: FC<Props> = ({ session }) => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const pathname = usePathname().replace("/", "");
//   return (
//     <header className="w-full h-20 z-50">
//       <nav className="lg:w-3/5 lg:mx-auto mx-5 flex justify-between items-center h-full">
//         <Link href="/">
//           <Button className="flex-1 text-lg font-bold">کجا قسط</Button>
//         </Link>
//         <ul
//           className={`flex-1 flex flex-col md:right-0 md:flex-row md:bg-inherit bg-cyan-900 transition-all justify-around items-center w-1/2 h-screen md:w-auto md:h-auto fixed top-0 md:relative ${
//             openMenu ? "right-0 w-screen" : "-right-full"
//           }`}
//         >
//           <li
//             className={`p-1 rounded-lg transition-all cursor-pointer ${
//               pathname.includes("categories")
//                 ? "hover:bg-secondary hover:text-primary  border border-black bg-primary"
//                 : "hover:bg-white/20"
//             } `}
//           >
//             <Link href="/categories"> دسته بندی کالاها</Link>
//           </li>
//           <li
//             className={`p-1 rounded-lg transition-all cursor-pointer ${
//               pathname.includes("providers")
//                 ? "hover:bg-secondary hover:text-primary  border border-black bg-primary"
//                 : "hover:bg-white/20"
//             } `}
//           >
//             <Link href="/providers">وام دهندگان</Link>
//           </li>
//           <li
//             className={`p-1 rounded-lg transition-all cursor-pointer ${
//               pathname.includes("learning")
//                 ? "hover:bg-secondary hover:text-primary  border border-black bg-primary"
//                 : "hover:bg-white/20"
//             } `}
//           >
//             <Link href="/learning">آموزش</Link>
//           </li>
//           <li
//             className={`p-1 rounded-lg transition-all cursor-pointer ${
//               pathname.includes("aboutus")
//                 ? "hover:bg-secondary hover:text-primary  border border-black bg-primary"
//                 : "hover:bg-white/20"
//             } `}
//           >
//             <Link href="/aboutus">درباره ما</Link>
//           </li>
//           <li>
//             {session?.user ? (
//               <SignedIn session={session} />
//             ) : (
//               <button
//                 onClick={() => signIn()}
//                 className={`p-1 rounded-lg transition-all cursor-pointer ${
//                   pathname.includes("auth")
//                     ? "hover:bg-secondary hover:text-primary  border border-black bg-primary"
//                     : "hover:bg-white/20"
//                 } `}
//               >
//                 وارد شوید
//               </button>
//             )}
//           </li>
//         </ul>
//         <button
//           onClick={() => setOpenMenu(!openMenu)}
//           className="md:hidden z-50"
//         >
//           <AiOutlineMenu
//             className={`${openMenu ? "text-white" : "text-white"}`}
//           />
//         </button>
//       </nav>
//       <div
//         className=""
//         style={{
//           height: "1px",
//           background: "linear-gradient(to right,#F2E9E4, #46494C,#F2E9E4)",
//         }}
//       />
//     </header>
//   );
// };

export default Header;
