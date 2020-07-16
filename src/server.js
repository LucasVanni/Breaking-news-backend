import app from './app';

app.listen(process.env.PORT || 3333, () => {
    console.log(`🚀 Server is running in port ${process.env.PORT}`);
});
