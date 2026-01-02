import { Link } from 'react-router'
import { Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import dayjs from 'dayjs';

function PostTable({ posts }) {// props.posts을 구조분해

    const lists = posts ? posts : [];

    return (
        <TableContainer sx={{ mt: 3 }}>
            <Table>
                {/* 테이블 머릿말 */}
                <TableHead>
                    <TableRow sx={{
                        '& th': {// row 안에 있는 모든 <th>셀에 스타일 적용
                            borderBottom: '1px solid #e5e7eb',
                            fontSize: 14,
                            fontWeight: 500,
                            color: '#9ca3af'
                        }
                    }}>
                        <TableCell align="center" width={80}>번호</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell align="center" width={160}>작성자</TableCell>
                        <TableCell align="center" width={80}>조회수</TableCell>
                        <TableCell align="center" width={180}>작성일</TableCell>
                    </TableRow>
                </TableHead>

                {/* 테이블 본문 */}
                <TableBody>
                    {
                        lists.map(({ id, title, readCount, createdAt, author }) => (
                            <TableRow key={id}
                                hover sx={{ '& td': { fontSize: 15, borderBottom: '1px soild #f3f4f6' } }}
                            >
                                <TableCell align="center">{id}</TableCell>
                                <TableCell>
                                    <Typography component={Link} to={`/posts/${id}`}
                                        sx={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit', '&:hover': { color: 'primary.main' } }}>
                                        {title}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    {
                                        author?.nickname && author.nickname !== '익명' ? (
                                            <Chip label={author.nickname} size='small' sx={{ borderRadius: 999, px: 2, height: 30, fontSize: 13, bgcolor: 'primary.main', color: '#fff' }} />

                                        ) : (
                                            <Typography sx={{ fontSize: 14 }}>{author?.nickname || '익명'}</Typography>
                                        )}


                                </TableCell>
                                <TableCell align="center">{readCount}</TableCell>
                                <TableCell align="center" sx={{ color: '#6b7280' }}>
                                    {/* { new Date(createdAt).toLocaleString() } */}
                                    {dayjs(createdAt).format('YY/MM/DD HH:mm')}
                                </TableCell>
                            </TableRow>
                        ))
                    }

                    {/* 게시글이 하나도 없을 때 */}
                    {
                        lists.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} align='center' sx={{ py: 5 }}>
                                    게시글이 없습니다.
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PostTable;