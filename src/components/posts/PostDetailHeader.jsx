import React from 'react';
import { Box, Chip, Divider, Typography } from '@mui/material'

function PostDetailHeader({ post }) {
    const { title, readCount, createdAt, updateAt, author } = post;

    return (
        <>
            <Typography variant='h6' sx={{ fontWeight: 700, mb: 1.5 }}>
                {title}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                <Typography variant='body2' sx={{ color: '#666' }}>
                    작성자:
                </Typography>
                <Chip label={author.nickname} size='small' sx={{ ml: 0.5, px: 1.5, borderRadius: 999, bgcolor: 'primary.main', color: '#fff' }} />
                <Typography variant='body2' sx={{ color: '#666', ml: 5 }}>조회수: {readCount}</Typography>
            </Box>

            <Typography variant='caption' sx={{ color: '#666' }}>
                작성일 : {new Date(createdAt).toLocaleString()}
                {updateAt && <> | 수정일 : {new Date(updateAt).toLocaleString()} </>}
            </Typography>

            <Divider sx={{ my: 2 }} />
        </>
    );
}

export default PostDetailHeader;