import PropTypes from 'prop-types'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import useStyles from './style'
import { data } from './data'
import { useEffect, useState } from 'react'
import { noop } from '../../../../utils'

const Skills = ({ saveSkills }) => {
  const classes = useStyles()
  const [skillsList, setSkillsList] = useState(data)

  useEffect(() => {
    if (skillsList?.length > 0) {
      saveSkills(skillsList)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillsList])

  const onDragEnd = (result) => {
    const { destination, source, reason } = result

    if (!destination || reason === 'CANCEL') {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const tempList = Object.assign([], skillsList)
    const droppedList = skillsList[source.index]

    tempList.splice(source.index, 1)
    tempList.splice(destination.index, 0, droppedList)

    setSkillsList(tempList)
  }

  return (
    <div className={classes.root}>
      <Typography variant='h5' gutterBottom>
        Skills
      </Typography>
      <DragDropContext onDragEnd={onDragEnd}>
        <Paper className={classes.paper} elevation={3}>
          <Droppable droppableId='sl1'>
            {(provided) => (
              <List {...provided.droppableProps} ref={provided.innerRef}>
                {skillsList?.map((skill, index) => (
                  <Draggable
                    key={skill.id}
                    draggableId={skill.id}
                    index={index}
                  >
                    {(provided) => (
                      <ListItem
                        button
                        key={skill.id}
                        className={classes.listItem}
                        classes={{ button: classes.button }}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ListItemText
                          primary={`${index + 1}. ${skill.text}`}
                          classes={{ primary: classes.primary }}
                        />
                      </ListItem>
                    )}
                  </Draggable>
                ))}
              </List>
            )}
          </Droppable>
        </Paper>
      </DragDropContext>
    </div>
  )
}

Skills.propTypes = {
  saveSkills: PropTypes.func
}

Skills.defaultProps = {
  saveSkills: noop
}

export default Skills
