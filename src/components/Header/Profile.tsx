import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Augusto Pohl</Text>
                    <Text c olor="gray.300" fontSize="small">
                        augustopohl@hotmail.com
                        </Text>
                </Box>
            )}

            <Avatar size="md" name="Augusto Pohl" />
        </Flex>
    );
}