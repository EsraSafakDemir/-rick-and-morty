import React from 'react'
import Card from 'react'
import CardActionArea from 'react'
import Typography from 'react'
import CardMedia from 'react'
import CardContent from 'react'



function CharacterCard() {
    return (
      <Card style={{width: 275, margin: 20}}>
        <CardActionArea>
          <CardMedia style={{height: 400}} image="./components/assets/morty1.jpg"/>
          <CardContent>
            <Typography  variant="h5" component="h2">
              Lizard
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
