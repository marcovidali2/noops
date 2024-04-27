import CreateForm from "@/features/posts/CreateForm";
import HorizontallyCentered from "@/ui/HorizontallyCentered";

const Create = () => {
    return (
        <HorizontallyCentered>
            <div className="w-[32rem]">
                <CreateForm />
            </div>
        </HorizontallyCentered>
    );
};

export default Create;
