import { Box, Button, ColumnLayout, Container, FormField, Grid, Header, Icon, SpaceBetween } from "@cloudscape-design/components";
import { COMPANY_NAME } from "../../consts";
import { Link } from "../_navigation";

export const Content = () => {
  return (
    <Box margin={{ bottom: 'l' }}>
      <div className="custom-home__header">
        <Box padding={{ vertical: 'xxxl', horizontal: 's' }}>
          <Grid
            gridDefinition={[
              { offset: { l: 2, xxs: 1 }, colspan: { l: 8, xxs: 10 } },
              { colspan: { xl: 6, l: 5, s: 6, xxs: 10 }, offset: { l: 2, xxs: 1 } },
              { colspan: { xl: 2, l: 3, s: 4, xxs: 10 }, offset: { s: 0, xxs: 1 } },
            ]}
          >
            <Box fontWeight="light" padding={{ top: 'xs' }}>
              <span className="custom-home__category">Networking &amp; Content Delivery</span>
            </Box>
            <div className="custom-home__header-title">
              <Box variant="h1" fontWeight="heavy" padding="n" fontSize="display-l" color="inherit">
                Event Finder
              </Box>
              <Box fontWeight="light" padding={{ bottom: 's' }} fontSize="display-l" color="inherit">
                Find upcoming events to attend across the globe
              </Box>
              <Box variant="p" fontWeight="light">
                <span className="custom-home__header-sub-title">
                  Event Finder is a tool that compiles a list of internal and external events
                  for professionals at {COMPANY_NAME} to review, get notified, and eventually attend for speaking. Join today!
                </span>
              </Box>
            </div>
            <div className="custom-home__header-cta">
              <Container>
                <SpaceBetween size="xl">
                  <Box variant="h2" padding="n">
                    Create distribution
                  </Box>
                  <FormField stretch={true} label="Delivery method">
                    {/* <Select
                      selectedAriaLabel="Selected"
                      options={cloudfrontDistributions}
                      selectedOption={selectedOption}
                      ariaRequired={true}
                      onChange={e => setSelectedOption(e.detail.selectedOption)}
                    /> */}
                  </FormField>
                  <Button href="#" variant="primary">
                    Next step
                  </Button>
                </SpaceBetween>
              </Container>
            </div>
          </Grid>
        </Box>
      </div>

      <Box padding={{ top: 'xxxl', horizontal: 's' }}>
        <Grid
          gridDefinition={[
            { colspan: { xl: 6, l: 5, s: 6, xxs: 10 }, offset: { l: 2, xxs: 1 } },
            { colspan: { xl: 2, l: 3, s: 4, xxs: 10 }, offset: { s: 0, xxs: 1 } },
          ]}
        >
          <SpaceBetween size="xxl">
            <div>
              <Box variant="h1" tagOverride="h2" padding={{ bottom: 's', top: 'n' }}>
                Benefits and features
              </Box>
              <Container>
                <ColumnLayout columns={2} variant="text-grid">
                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                      CloudFront console
                    </Box>
                    <Box variant="p">
                      Create, monitor, and manage your content delivery with a few simple clicks on the CloudFront
                      console.
                    </Box>
                  </div>
                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                      Static and dynamic content
                    </Box>
                    <Box variant="p">
                      Deliver both static content and dynamic content that you can personalize for individual users.
                    </Box>
                  </div>
                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                      Reporting and analytics
                    </Box>
                    <Box variant="p">
                      Get detailed cache statistics reports, monitor your CloudFront usage in near real-time, track your
                      most popular objects, and set alarms on operational metrics.
                    </Box>
                  </div>
                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                      Tools and libraries
                    </Box>
                    <Box variant="p">
                      Take advantage of a variety of tools and libraries for managing your CloudFront distribution, like
                      the CloudFront API, the AWS Command Line Interface (AWS CLI), and the AWS SDKs.
                    </Box>
                  </div>
                </ColumnLayout>
              </Container>
            </div>
            <div>
              <Box variant="h1" tagOverride="h2" padding={{ bottom: 's', top: 'n' }}>
                Use cases
              </Box>
              <Container>
                <ColumnLayout columns={2} variant="text-grid">
                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                      Configure multiple origins
                    </Box>
                    <Box variant="p">
                      Configure multiple origin servers and multiple cache behaviors based on URL path patterns on your
                      website. Use AWS origins such as Amazon S3 or Elastic Load Balancing, and add your own custom
                      origins to the mix.
                    </Box>
                    <Link href="#" external>
                      Learn more
                    </Link>
                  </div>
                  <div>
                    <Box variant="h3" padding={{ top: 'n' }}>
                      Deliver streaming video
                    </Box>
                    <Box variant="p">
                      Use CloudFront to deliver on-demand video without the need to set up or operate any media servers.
                      CloudFront supports multiple protocols for media streaming.
                    </Box>
                    <Link href="#" external>
                      Learn more
                    </Link>
                  </div>
                </ColumnLayout>
              </Container>
            </div>
          </SpaceBetween>
          <div className="custom-home__sidebar">
            <SpaceBetween size="xxl">
              <Container
                header={
                  <Header variant="h2">
                    Getting started{' '}
                    <span role="img" aria-label="Icon external Link">
                      <Icon name="external" size="inherit" />
                    </span>
                  </Header>
                }
              >
                <ul aria-label="Getting started documentation" className="custom-list-separator">
                  {/* <li>
                    <Link
                      href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html"
                      text="What is Amazon CloudFront?"
                    />
                  </li>
                  <li>
                    <ExternalLinkItem
                      href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html"
                      text="Getting started with CloudFront"
                    />
                  </li>
                  <li>
                    <ExternalLinkItem
                      href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html"
                      text="Working with CloudFront distributions"
                    />
                  </li> */}
                </ul>
              </Container>

              <Container
                header={
                  <Header variant="h2">
                    More resources{' '}
                    <span role="img" aria-label="Icon external Link">
                      <Icon name="external" size="inherit" />
                    </span>
                  </Header>
                }
              >
                {/* <ul aria-label="Additional resource links" className="custom-list-separator">
                  <li>
                    <ExternalLinkItem href="https://aws.amazon.com/documentation/cloudfront/" text="Documentation" />
                  </li>
                  <li>
                    <ExternalLinkItem href="#" text="FAQ" />
                  </li>
                  <li>
                    <ExternalLinkItem href="#" text="CloudFront forum" />
                  </li>
                  <li>
                    <ExternalLinkItem href="#" text="Contact us" />
                  </li>
                </ul> */}
              </Container>
            </SpaceBetween>
          </div>
        </Grid>
      </Box>
    </Box>
  )
}
