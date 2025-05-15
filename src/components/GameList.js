import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const GameCard = styled(Card)`
  transition: transform 0.3s ease-in-out;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  &:hover {
    transform: translateY(-10px);
  }
`;

const games = [
  {
    id: 1,
    title: '魔兽世界',
    image: 'https://picsum.photos/300/200',
    description: '著名的大型多人在线角色扮演游戏'
  },
  {
    id: 2,
    title: '英雄联盟',
    image: 'https://picsum.photos/300/201',
    description: '全球最受欢迎的MOBA游戏之一'
  },
  {
    id: 3,
    title: '守望先锋',
    image: 'https://picsum.photos/300/202',
    description: '暴雪出品的团队射击游戏'
  },
  {
    id: 4,
    title: '原神',
    image: 'https://picsum.photos/300/203',
    description: '开放世界冒险RPG游戏'
  }
];

function GameList() {
  return (
    <Box>
      <Typography variant="h2" sx={{ color: 'white', mb: 4, textAlign: 'center' }}>
        热门游戏
      </Typography>
      <Grid container spacing={4}>
        {games.map((game) => (
          <Grid item xs={12} sm={6} md={3} key={game.id}>
            <GameCard>
              <CardMedia
                component="img"
                height="200"
                image={game.image}
                alt={game.title}
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {game.title}
                </Typography>
                <Typography variant="body2">
                  {game.description}
                </Typography>
              </CardContent>
            </GameCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GameList; 