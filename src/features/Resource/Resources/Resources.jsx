// STYLES
import "./Resources.scss";

// FEATURES COMPONENTS
import { ResourceCard } from "../../index";

// UI COMPONENTS
import { Pagination, Spinner } from "../../../ui";

// HOOKS
import { useGetResources } from "../../../hooks";

function Resources() {
  const { resources, isPending } = useGetResources();

  if (isPending) return <Spinner />;

  return (
    <div className="resources_container">
      <div className="resources_header">
        <h1 className="resources_header_text">Resources</h1>
      </div>

      <div className="resources-middle-container">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            index={index}
            title={resource.title}
            author={resource.author}
            description={resource.description}
            publishedAt={resource.publishedAt}
            image={resource.urlToImage}
          />
        ))}
      </div>

      <Pagination total={80} />
    </div>
  );
}

export default Resources;
