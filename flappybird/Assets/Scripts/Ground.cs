using UnityEngine;

public class GroundScroll : MonoBehaviour
{
    public float speed = 3f;

    private float width;
    private static GroundScroll[] grounds;

    void Start()
    {
        width = GetComponent<SpriteRenderer>().bounds.size.x;

        // Cache all ground instances once
        if (grounds == null)
        {
            grounds = FindObjectsOfType<GroundScroll>();
        }
    }

    void Update()
    {
        // Move left
        transform.Translate(Vector2.left * speed * Time.deltaTime);

        // If this ground is fully off-screen on the left
        if (transform.position.x + width < -Camera.main.orthographicSize * Camera.main.aspect)
        {
            MoveToRight();
        }
    }

    void MoveToRight()
    {
        float rightMostX = transform.position.x;

        // Find the rightmost ground
        foreach (GroundScroll g in grounds)
        {
            if (g.transform.position.x > rightMostX)
            {
                rightMostX = g.transform.position.x;
            }
        }

        // Place this ground immediately after it
        transform.position = new Vector3(
            rightMostX + width,
            transform.position.y,
            transform.position.z
        );
    }
}
