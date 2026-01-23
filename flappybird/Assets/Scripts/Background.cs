using UnityEngine;

public class Background : MonoBehaviour
{
    public float speed = 1f;
    private float width;

    void Start()
    {
        width = GetComponent<SpriteRenderer>().bounds.size.x;
    }

    void Update()
    {
        transform.Translate(Vector2.left * speed * Time.deltaTime);

        if (transform.position.x <= -width)
        {
            transform.position += Vector3.right * width * 2f;
        }
    }
}


