import Script from 'next/script'
import { Box, Container } from '@chakra-ui/react';

export default function Contact() {
    return (
        <Box as={Container} maxW="7xl" id="contact">
            <iframe data-tally-src="https://tally.so/embed/meQ5Xk?alignLeft=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="310" frameBorder="0" marginHeight="0" marginWidth="0" title="Hablemos!
"></iframe>

            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                    Tally.loadEmbeds();
                }}
            />
        </Box>
        )
}
