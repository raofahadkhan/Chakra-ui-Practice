import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
// import {
// 	chakra,
// 	Button,
// 	Divider,
// 	Flex,
// 	FormControl,
// 	Heading,
// 	Input,
// 	Stack,
// 	UseMediaQueryOptions,
// 	Text,
// 	useColorModeValue,
// 	useMediaQuery,
// 	Box,
// 	useToast,
// 	Image,
// 	Spinner,
// 	HStack,
// 	VStack,
// 	Textarea,
// } from "@chakra-ui/react";

const Nav_Bar = () => {
	return (
		<HStack
			w={{ sm: "95%" }}
			mx={"auto"}
			justifyContent={"space-between"}
			py={"8px"}
			borderBottom={"1px solid #E7E7E7"}
		>
			<Box width={{ lg: "45.5%" }}>
				<Image
					src="/images/livecart-logo.svg"
					alt="livecart logo"
					w={{ sm: "80px" }}
				/>
			</Box>
			<HStack width={{ lg: "47.5%" }} justifyContent={"space-between"}>
				<HStack justifyContent={"space-between"}>
					<HStack
						bg={"rgba(100, 116, 139, 0.20)"}
						rounded={"full"}
						px={"4px"}
						py={{ sm: "6px", md: "8px" }}
						gap={"2px"}
					>
						<Image
							src="/images/Frame.png"
							alt="pin icon"
							h={"12px"}
							w={"10px"}
						/>
						<Text fontSize={"10px"} fontWeight={"medium"}>
							Ashburn, VA 20147
						</Text>
					</HStack>
					<Image
						src="/images/menu.png"
						alt="menu"
						cursor={"pointer"}
						h={"17px"}
					/>
				</HStack>
				<VStack>
					<Box rounded={"full"}>
						<Image
							src="/images/user.png"
							alt="menu"
							cursor={"pointer"}
							h={"17px"}
							mx={"auto"}
						/>
						<Text textAlign={"center"} fontSize={{sm:"14px",lg:""}}>Account</Text>{" "}
					</Box>
				</VStack>
			</HStack>
		</HStack>
	);
};

export default Nav_Bar;
