import './style.css';
import { CircleIcon, CommentIcon } from '../../Icons/Icons';
import makeDateString from '../../util/makeDateString';

const SingleIssue = ({ issue }) => {
  const { title, number, created_at, labels, user, comments, assignee } = issue;
  const labelsArr = labels.map((label) => {
    return {
      labelName: label.name,
      labelColor: label.color,
    };
  });
  const loginAssignee = {
    name: assignee?.login,
    avatar_url: assignee?.avatar_url,
  };
  const { login } = user;
  const dateString = makeDateString(created_at);
  return (
    <div className="single-item">
      <section className="icon">
        <CircleIcon />
      </section>
      <section className="issue-details">
        <div className="issue-author">
          <div className="left-content">
            <div className="issue-title">
              {title}{' '}
              <span>
                {' '}
                {labelsArr.map((element) => (
                  <p
                    className="label"
                    key={element.labelName}
                    style={{
                      background: `#${element.labelColor}`,
                      color: element.labelColor === 'b60205' ? 'white' : '',
                    }}
                  >
                    {' '}
                    {element.labelName}
                  </p>
                ))}{' '}
              </span>
            </div>
            <p className="author">
              #{number} opened {dateString} by {login}
            </p>
          </div>
          <div className="avatar">
            <img src={loginAssignee.avatar_url} alt={loginAssignee.name} />
          </div>
        </div>
        {comments > 0 && (
          <div className="comments">
            <span className="comment-icon">
              {' '}
              <CommentIcon />
            </span>{' '}
            <span> {comments}</span>
          </div>
        )}
      </section>
    </div>
  );
};

export default SingleIssue;
