import Container from "../../components/Container";
import Heading from "../../components/Heading"
import Image from "next/image"
import Layout from "../../components/Layout"
import Paragraph from "../../components/Paragraph";

const projectThreePage = () => {
    return <Layout>
                <Container>
                    <Image 
                        src="/images/03.jpg"
                        alt="Rocky coast landscape"
                        width={1500}
                        height={1000}
                        layout="responsive"
                    />
                    <Heading level="1">Project 3 title</Heading>
                    <Paragraph>This is a description.</Paragraph>
                </Container>
            </Layout>
    
}
export default projectThreePage;