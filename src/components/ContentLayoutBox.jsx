import Box from '@mui/material/Box';

const ContentLayoutBox = ({ leftPanelContent, rightPanelContent }) => {
    return (
        <Box component='main' sx={{ 
            display: { sm: 'grid' },
            gridTemplateColumns: '1fr 1fr',
            padding: { xs: '1em', sm: '2em'}, 
            paddingLeft: { sm: 'calc(240px + 2em)' },
            paddingBottom: { xs: '7em', sm: '2em' },
            gap: '2em', 
        }}>
            <div>
                {leftPanelContent}
            </div>
            <div>
                {rightPanelContent}
            </div>
        </Box>
    );
};

ContentLayoutBox.defaultProps = {
    leftPanelContent: 'left panel',
    rightPanelContent: 'right panel',
}

export default ContentLayoutBox;