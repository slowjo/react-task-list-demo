import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import CardActions from '@mui/material/CardActions';
import { CSSTransition } from 'react-transition-group';
import Divider from '@mui/material/Divider';

function Task({ task, toggleCompleted, deleteTask, index, ...rest }) {
  const [expanded, setExpanded] = React.useState(false);

  const nodeRef = React.useRef();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (  
    <CSSTransition timeout={500} nodeRef={nodeRef} classNames="task-animate" {...rest} unmountOnExit>
    <div ref={nodeRef}>
    {index > 0 && (
    <Divider />
    )}
    <Card elevation={0} sx={{ minWidth: 275 }}>
      <CardHeader
        sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        title={task.taskName}
        subheader={task.taskCategory}
        action={
          <>
          
          <IconButton onClick={() => {deleteTask(task.id)}}>
            <ClearIcon color="error" />
          </IconButton> 
        </>
        }
      />
      <CardActions disableSpacing>
        <IconButton sx={{  }} onClick={() =>        {toggleCompleted(task.id)}}>
          {task.completed ? (
            <CheckCircleIcon color="success" />
          ) : (
            <CheckIcon color="primary" />
          )}
          </IconButton>
        <IconButton onClick={handleExpandClick} aria-label="show more" sx={{ ml: 'auto' }}>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2">
          Do some work and be happy while you do it.
        </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    </CSSTransition>
  );
}

export default Task;