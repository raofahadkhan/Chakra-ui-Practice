"use client";
import { Search2Icon } from "@chakra-ui/icons";
import {
	Box,
	Checkbox,
	HStack,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const getProductsFromMealme = async (
	lat: number,
	long: number,
	query: string,
	radius: number
) => {
	try {
		const endpoint = "https://api.mealme.ai/search/product/v4";
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				"Id-Token": "livecart:b4db7650-8c35-46d2-8e16-20d72080e1b7",
			},
		};
		const url = `${endpoint}?query=${query}&user_latitude=${lat}&user_longitude=${long}&maximum_miles=${radius}`;
		const response = await fetch(url, options);
		const data = await response.json();

		console.log(data); // Process the data as needed
	} catch (error) {
		console.log(error);
	}
};

export default function Home() {
	const [inputValue, setInputValue] = useState<string>("");

	useEffect(() => {
		getProductsFromMealme(37.7786357, -122.3918135, inputValue, 5);
	}, [inputValue]);
	return (
		<Box w={{ sm: "95%" }} mx={"auto"}>
			<HStack my={"2rem"}>
				<Image
					src="/images/shopping-list.svg"
					alt="livecart logo"
					w={{ sm: "50px" }}
					h={{ sm: "50px" }}
				/>
				<Text
					fontSize={"30px"}
					fontWeight={"bold"}
					fontFamily={"'Asap Condensed', sans-serif"}
				>
					My Grocery List
				</Text>
			</HStack>
			{/* <Box pos={"relative"}>
				<Menu>
					<MenuButton w={"100%"}>
						<InputGroup
							w={"90%"}
							mx={"auto"}
							bgColor={"gray.100"}
							border={".5px solid #6B6B6B"}
							borderRadius={"2xl"}
						>
							<InputLeftElement pointerEvents="none">
								<Search2Icon color="black" />
							</InputLeftElement>
							<Input
								borderRadius={"1rem"}
								border={".5px solid #6B6B6B"}
								type="text"
								placeholder="Search grocery items here to add..."
							/>
						</InputGroup>
					</MenuButton>
					<MenuList w={"full"}>
						<MenuItem>Download</MenuItem>
						<MenuItem>Create a Copy</MenuItem>
						<MenuItem>Mark as Draft</MenuItem>
						<MenuItem>Delete</MenuItem>
						<MenuItem>Attend a Workshop</MenuItem>
					</MenuList>
				</Menu>
			</Box> */}
			<Box pos={"relative"}>
				{/* <input
					type="text"
					value={inputValue}
					onChange={(e) => {
						e.preventDefault();
						setInputValue(e.target.value);
						console.log(e.target.value);
					}}
				/> */}
				<InputGroup
					zIndex={20}
					w={"90%"}
					mx={"auto"}
					bgColor={"gray.100"}
					border={".5px solid #6B6B6B"}
					borderRadius={"2xl"}
				>
					<InputLeftElement pointerEvents="none">
						<Search2Icon color="black" />
					</InputLeftElement>
					<Input
						borderRadius={"1rem"}
						border={".5px solid #6B6B6B"}
						type="text"
						value={inputValue}
						onChange={(e) => {
							e.preventDefault();
							setInputValue(e.target.value);
							console.log(e.target.value);
						}}
						placeholder="Search grocery items here to add..."
					/>
				</InputGroup>
				{inputValue && inputValue.length > 0 && (
					<Box
						zIndex={10}
						pos={"relative"}
						bgColor={"red"}
						mx={"auto"}
						width={"90%"}
						h={"fit-content"}
					>
						<Box
							pos={"absolute"}
							w={"full"}
							bgColor={"yellow"}
							top={"-10px"}
							p={"20px 10px"}
						>
							<Text>akljdflajdklfjakldf</Text>
						</Box>
					</Box>
				)}
			</Box>

			<Box
				display={"flex"}
				pt={"50px"}
				alignItems={"center"}
				justifyContent={"space-between"}
				w={"full"}
			>
				<HStack borderBottom={"2px solid gray"} w={"60%"}>
					<Checkbox defaultChecked>
						<Text fontSize={"30px"} fontFamily={"'Slackside One', cursive"}>
							Chicken 2 lbs
						</Text>
					</Checkbox>
				</HStack>
				<HStack w={"fit-content"} gap={"2rem"} ml={"auto"}>
					<HStack>
						<Box bgColor={"gray.100"} rounded={"full"} p={"10px"}>
							-
						</Box>
						<Box>1</Box>
						<Box bgColor={"gray.100"} rounded={"full"} p={"10px"}>
							+
						</Box>
					</HStack>
					<Image
						src="/images/trash-bin.svg"
						alt="trash-bin logo"
						w={{ sm: "30px" }}
					/>
				</HStack>
			</Box>
			<Box
				display={"flex"}
				pt={"50px"}
				alignItems={"center"}
				justifyContent={"space-between"}
				w={"full"}
			>
				<HStack borderBottom={"2px solid gray"} w={"60%"}>
					<Checkbox defaultChecked>
						<Text fontSize={"30px"} fontFamily={"'Slackside One', cursive"}>
							Chicken 2 lbs
						</Text>
					</Checkbox>
				</HStack>
				<HStack w={"fit-content"} gap={"2rem"} ml={"auto"}>
					<HStack>
						<Box bgColor={"gray.100"} rounded={"full"} p={"10px"}>
							-
						</Box>
						<Box>1</Box>
						<Box bgColor={"gray.100"} rounded={"full"} p={"10px"}>
							+
						</Box>
					</HStack>
					<Image
						src="/images/trash-bin.svg"
						alt="trash-bin logo"
						w={{ sm: "30px" }}
					/>
				</HStack>
			</Box>
			<Box
				display={"flex"}
				pt={"50px"}
				alignItems={"center"}
				justifyContent={"space-between"}
				w={"full"}
			>
				<HStack borderBottom={"2px solid gray"} w={"60%"}>
					<Checkbox defaultChecked>
						<Text fontSize={"30px"} fontFamily={"'Slackside One', cursive"}>
							Chicken 2 lbs
						</Text>
					</Checkbox>
				</HStack>
				<HStack w={"fit-content"} gap={"2rem"} ml={"auto"}>
					<HStack>
						<Box
							bgColor={"gray.100"}
							borderRadius={"full"}
							py={"10px"}
							px={"20px"}
						>
							-
						</Box>
						<Box>1</Box>
						<Box bgColor={"gray.100"} rounded={"full"} p={"10px"}>
							+
						</Box>
					</HStack>
					<Image
						src="/images/trash-bin.svg"
						alt="trash-bin logo"
						w={{ sm: "30px" }}
					/>
				</HStack>
			</Box>
		</Box>
	);
}
