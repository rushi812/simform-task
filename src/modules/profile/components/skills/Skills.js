import PropTypes from 'prop-types'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import AddIcon from '@material-ui/icons/Add'
import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/Edit'

import useStyles from './style'
import { noop } from '../../../../utils'

const Skills = ({
  handleSkillInputChange,
  addSkilBtnHandler,
  skillsList,
  saveSkills,
  deleteItemHandler,
  editListItemHandler,
  addSkillInputValue,
  isSkillEdit,
  updateSkilBtnHandler
}) => {
  const classes = useStyles()

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

    saveSkills(tempList)
  }

  return (
    <div className={classes.root}>
      <Typography variant='h5' gutterBottom>
        Skills
      </Typography>
      <DragDropContext onDragEnd={onDragEnd}>
        <Paper className={classes.paper} elevation={3}>
          <div className={classes.addSkill}>
            <TextField
              variant='outlined'
              id='skill'
              name='skill'
              label='Add skill'
              fullWidth
              value={addSkillInputValue}
              onChange={handleSkillInputChange}
            />
            {isSkillEdit ? (
              <Button
                color='primary'
                variant='outlined'
                aria-label='edit'
                className={classes.addBtn}
                onClick={updateSkilBtnHandler}
              >
                <SaveIcon />
              </Button>
            ) : (
              <Button
                color='primary'
                variant='outlined'
                aria-label='add'
                className={classes.addBtn}
                onClick={addSkilBtnHandler}
              >
                <AddIcon />
              </Button>
            )}
          </div>
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
                        <IconButton
                          edge='end'
                          aria-label='edit'
                          onClick={() => editListItemHandler(skill.id)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          edge='end'
                          aria-label='delete'
                          onClick={() => deleteItemHandler(skill.id)}
                        >
                          <HighlightOffIcon />
                        </IconButton>
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
  addSkilBtnHandler: PropTypes.func,
  skillsList: PropTypes.instanceOf(Array),
  saveSkills: PropTypes.func,
  deleteItemHandler: PropTypes.func,
  editListItemHandler: PropTypes.func,
  addSkillInputValue: PropTypes.string,
  isSkillEdit: PropTypes.bool,
  updateSkilBtnHandler: PropTypes.func
}

Skills.defaultProps = {
  addSkilBtnHandler: noop,
  skillsList: [],
  saveSkills: noop,
  deleteItemHandler: noop,
  editListItemHandler: noop,
  addSkillInputValue: '',
  isSkillEdit: false,
  updateSkilBtnHandler: noop
}

export default Skills
