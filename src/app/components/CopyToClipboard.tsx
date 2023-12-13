import { IconButton, Snackbar } from '@mui/joy'
import { useState } from 'react'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const CopyToClipboardButton = ({ message }: { message: string}) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
      setOpen(true)
      navigator.clipboard.writeText(message);
    }
    
    return (
        <>
          <IconButton size="sm" onClick={handleClick} color="neutral">
            <ContentPasteIcon />
          </IconButton>
          <Snackbar
            open={open}
            onClose={() => setOpen(false)}
            color="success"
          >
            Copied to Clipboard
          </Snackbar>
        </>
    )
}

export default CopyToClipboardButton