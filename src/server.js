import app from './app';

const port = process.env.PORT;

app.listen(port || 3333, () => {
    console.log(`Server is running in port ${port}`);
});
