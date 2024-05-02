import CreateForm from "@/features/posts/CreateForm";
import HorizontallyCentered from "@/ui/HorizontallyCentered";
import ResponsiveCore from "@/ui/ResponsiveCore";

const Create = () => {
    return (
        <HorizontallyCentered>
            <ResponsiveCore>
                <CreateForm />
            </ResponsiveCore>
        </HorizontallyCentered>
    );
};

export default Create;
