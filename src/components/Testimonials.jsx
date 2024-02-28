import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";

const Testimonial = (props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("gray.100", "gray.700")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const Testimonials = () => {
  return (
    <Box>
      <Container maxW={"7xl"} py={16} px={8} as={Stack} spacing={12}>
        <Stack
          spacing={0}
          align={"center"}
          style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%" }}
        >
          <Heading>
            BİZİM{" "}
            <Text as={"span"} color={"blue.400"}>
              MOTİVASİYAMIZ
            </Text>
          </Heading>
          <br />

          <Badge
            colorScheme="green"
            padding={6}
            borderRadius={"8px"}
            // width={{ base: "80%", md: "90%" }}
            display={"block"}
            textAlign={"center"}
            whiteSpace={"wrap"}
          >
            Pasientlərimizin ailələrindən gələn rəylər onların xidmətlərimizə
            göstərdikləri sarsılmaz inamı əks etdirir
          </Badge>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Biz sizi sevirik!</TestimonialHeading>
              <TestimonialText>
                Salam Kənan müəllim mən sizə sonsuz minnətdaram sizin komandanın
                sayəsində övladımız 6 aydır ki sağlam həyatəna geri qayıdır.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              }
              name={"Anonim Valideyn"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Yenidən həyata qaytardız!</TestimonialHeading>
              <TestimonialText>
                Salam Kənan müəllim.Allah sizdən razı olsun.Mənim yoldaşım sizin
                mərkəzdə müalicə alır artıq 5ci aydır.Ümumi halınnan çox
                razıyam.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              }
              name={"Anonim Yoldaş"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Yenidən xoşbəxtik!</TestimonialHeading>
              <TestimonialText>
                Hər birinizə təşəkkür edirəm mənim övladım sizin sayənizdə bugün
                sağlam həyat yaşayır 1il 4aydır sizin mərkəzdə çalışır. Var
                olun.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              }
              name={"Anonim Valideyn"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;
